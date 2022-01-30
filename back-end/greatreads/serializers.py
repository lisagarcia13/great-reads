from rest_framework import serializers
from greatreads.models import Author, Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.StringRelatedField(many=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'release', 'description', 'author', 'image']


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = BookSerializer(many=True)

    class Meta:
        model = Author
        fields = ['id', 'name', 'books', 'image']
