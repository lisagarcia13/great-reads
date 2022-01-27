from rest_framework import viewsets, permissions
from greatreads.serializers import BookSerializer, AuthorSerializer
from greatreads.models import Book, Author


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
