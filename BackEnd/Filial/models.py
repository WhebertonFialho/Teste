from django.db import models

class Filial(models.Model):
    nome = models.CharField(max_length=100) 
    cidade = models.CharField(max_length=150) 
    cnpj = models.CharField(max_length=18)
    email = models.EmailField() 
    rua = models.CharField(max_length=150)
    nro = models.CharField(max_length=10)
    cep = models.CharField(max_length=10) #00.000-000    
    bairro = models.CharField(max_length=70)
    complemento = models.CharField(max_length=100, blank=True)
    latitude = models.CharField(max_length=20)
    longitude = models.CharField(max_length=20)
    
    
    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Filial'
        verbose_name_plural = 'Filiais'
        db_table = 'cad_filial'