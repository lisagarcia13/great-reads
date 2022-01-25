from rest_framework import viewsets
from greatreads.serializers import BookSerializer, AuthorSerializer
from greatreads.models import Book, Author


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
