from django.contrib import admin
from import_export import resources
from .models import Polution
from import_export.admin import ImportExportModelAdmin


class PolutionResource(resources.ModelResource):
    class Meta:
        model = Polution


class BookAdmin(ImportExportModelAdmin):
    resource_classes = [PolutionResource]


admin.site.register(Polution, BookAdmin)