"""
URL configuration for beautifulSin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.urls import path
from dashboard import views

urlpatterns = [
    path('search/', views.search_view, name='search'),
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('browser-exploitation', views.browser_exploitation, name='browser-exploitation'),
    path('web-security', views.web_security, name='web-security'),
    path('system-security', views.system_security, name='system-security'),
    path('mobile-security', views.mobile_security, name='mobile-security'),
    path('forensics', views.forensics, name='forensics'),
    path('social-engineering', views.social_engineering, name='social-engineering'),
    path('checklist', views.checklist, name='checklist'),
    path('settings', views.settings, name='settings')
]
