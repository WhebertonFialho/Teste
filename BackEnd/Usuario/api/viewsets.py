#from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from Usuario.models import Usuario
from .serializers import UsuarioSerializer

class UsuarioViewSet(ModelViewSet):
    #authentication_classes = (TokenAuthentication,)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['nome']