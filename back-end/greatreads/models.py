from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=256)
    image = models.CharField(max_length=256, null=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=256)
    release = models.IntegerField(null=True)
    image = models.CharField(max_length=256, null=True)
    description = models.CharField(max_length=256)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.title
