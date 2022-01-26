from rest_framework import serializers
from greatreads.models import Author, Book


class BookSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Book
        fields = ['title', 'release', 'description', 'author', 'image']


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = serializers.StringRelatedField(many=True)

    class Meta:
        model = Author
        fields = ['name', 'books', 'image']
