from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=60)
    email = models.EmailField()
    senha = models.CharField(max_length=40)

    def __str__(self):
        return self.nome
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        db_table = 'cad_usuario'

