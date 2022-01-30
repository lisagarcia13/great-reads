from rest_framework import serializers
from greatreads.models import Author, Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.StringRelatedField()

    class Meta:
        model = Book
        fields = ['id', 'title', 'release', 'description', 'author', 'image']


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = BookSerializer(many=True)

    class Meta:
        model = Author
        fields = ['id', 'name', 'books', 'image']

    def create(self, validated_data):
        books_data = validated_data.pop('books')
        author = Author.objects.create(**validated_data)
        for book_data in books_data:
            Book.objects.create(author=author, **book_data)
        return author

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
