from rest_framework import serializers
from .models import Contractor, Person


class ContactPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'surname', 'name', 'patronymic', 'phone']


class ContractorSerializer(serializers.ModelSerializer):
    contact_person = ContactPersonSerializer(read_only=True)

    class Meta:
        model = Contractor
        fields = ['id', 'name', 'contact_person', 'address']
