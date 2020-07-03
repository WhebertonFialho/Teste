from rest_framework.serializers import ModelSerializer
from rest_framework_friendly_errors.mixins import FriendlyErrorMessagesMixin
from Usuario.models import Usuario

class UsuarioSerializer(FriendlyErrorMessagesMixin, ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nome', 'email' , 'senha']