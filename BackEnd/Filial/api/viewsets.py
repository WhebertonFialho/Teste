#from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from Filial.models import Filial
from .serializers import FilialSerializer

class FilialViewSet(ModelViewSet):
    #authentication_classes = (TokenAuthentication,)
    queryset = Filial.objects.all()
    serializer_class = FilialSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['nome']  