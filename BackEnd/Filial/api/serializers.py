from rest_framework.serializers import ModelSerializer
from rest_framework_friendly_errors.mixins import FriendlyErrorMessagesMixin
from Filial.models import Filial

class FilialSerializer(FriendlyErrorMessagesMixin, ModelSerializer):
    class Meta:
        model = Filial
        fields = '__all__'