from rest_framework import serializers
from greatreads.models import Author, Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.StringRelatedField()

    class Meta:
        model = Book
        fields = ['id', 'title', 'release', 'description', 'author', 'image']


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = serializers.ReadOnlyField()

    class Meta:
        model = Author
        fields = ['id', 'name', 'books', 'image']
