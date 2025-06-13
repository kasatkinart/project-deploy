# views.py
from django.shortcuts import render
from django.core.cache import cache
from .models import Contractor


def contractor_list(request):
    # Достаём из кэша
    cached_contractors = cache.get("all_contractors")

    # Если нет в кэше — грузим из базы и кладём в кэш
    if cached_contractors is None:
        contractors = list(Contractor.objects.all())
        cache.set("all_contractors", contractors, timeout=300)  # 5 минут
        cached = False
    else:
        contractors = cached_contractors
        cached = True

    return render(request, "contractors.html", {
        "contractors_from_db": Contractor.objects.all(),  # всегда из базы
        "contractors_from_cache": contractors,
        "was_cached": cached,
    })
