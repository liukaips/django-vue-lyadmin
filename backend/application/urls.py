"""application URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include, re_path
from django.views.static import serve
from django.conf import settings
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from django.views.generic.base import RedirectView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from mysystem.views.login import LoginView,CaptchaView
from utils.swagger import CustomOpenAPISchemaGenerator

#前端接口view
from apps.oauth.views import WeChatXCXLoginAPIView,XCXWeChatUserInfoUpdateAPIView,WeChatXCXMobileLoginAPIView,WeChatGZHLoginAPIView,WeChatGZHBindAPIView,GetXCXShareQrcodeView,TTXCXLoginAPIView,WeChatGZHH5LoginAPIView,CheckWeChatGZHH5APIView,GetWeChatGZHH5JSSDKTempSignAPIView
from apps.address.views import *
from apps.logins.views import APPMobilePasswordLoginView,SendSmsCodeView,APPMobileSMSLoginView,ForgetPasswdResetView,RegisterView
from apps.lyusers.views import SetUserNicknameView,ChangeAvatarView,uploadImagesView,DestroyUserView
from apps.lymessages.views import UserMessagesView,UserMessagesNoticeView,GetUnreadMessageNumView

#app下载页
from apps.lyusers.views import downloadapp
#媒体文件流式响应
from utils.streamingmedia_response import streamingmedia_serve
#部署vue
from django.views.generic import TemplateView
#是否允许前端接口访问
from utils.middleware import OperateAllowFrontendView

schema_view = get_schema_view(
    openapi.Info(
        title="django-vue-lyadmin API",
        default_version='v1',
        # description="Test description",
        # terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(email="contact@snippets.local"),
        # license=openapi.License(name="BSD License"),
    ),
    # public 表示文档完全公开, 无需针对用户鉴权
    public=True,
    permission_classes=(permissions.AllowAny,),
    generator_class=CustomOpenAPISchemaGenerator,
)

urlpatterns = [
    path('static/<path:path>', serve, {'document_root': settings.STATIC_ROOT},),  # 处理静态文件
    # path('media/<path:path>', serve, {'document_root': settings.MEDIA_ROOT},),  # 处理媒体文件
    path('media/<path:path>', streamingmedia_serve, {'document_root': settings.MEDIA_ROOT}, ),  # 处理媒体文件
    # path('admin/', admin.site.urls),
    #api文档地址(正式上线需要注释掉)
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('lyapi/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'lyredoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    #管理后台的标准接口
    path('api/system/', include('mysystem.urls')),
    path('api/monitor/', include('lymonitor.urls')),
    path('api/terminal/', include('lywebsocket.urls')),
    path('api/token/', LoginView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/captcha/', CaptchaView.as_view()),

    #管理后台其他自定义接口
    path('api/address/', include('apps.address.urls')),
    path('api/messages/', include('apps.lymessages.urls')),
    path('api/users/', include('apps.lyusers.urls')),
    path('api/crontab/', include('apps.lycrontab.urls')),

    # ========================================================================================= #
    # ********************************** 前端微服务API用户接口************************************ #
    # ========================================================================================= #

    #是否允许前端接口访问(临时操作，重启后无效)
    path('api/super/operate/', OperateAllowFrontendView.as_view(), name='超级管理员动态操作是否允许前端api接口访问'),

    #集成部署后端管理页面
    path('downloadapp/',downloadapp ,name='前端APP下载页'),
    path('favicon.ico',RedirectView.as_view(url=r'static/favicon.ico')),
    path('', TemplateView.as_view(template_name="index.html"),name='后台管理默认页面'),
]

