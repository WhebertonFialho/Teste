from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from Filial.api.viewsets import FilialViewSet
from Usuario.api.viewsets import UsuarioViewSet

router = routers.DefaultRouter()
router.register(r'filial', FilialViewSet)
router.register(r'usuario', UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
