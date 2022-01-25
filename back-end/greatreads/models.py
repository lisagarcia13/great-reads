from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=256)
    image = models.ImageField(
        upload_to='images/', max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=256)
    image = models.ImageField(
        upload_to='images/', max_length=1000, blank=True, null=True)
    release = models.DateField()
    description = models.CharField(max_length=256)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.title
