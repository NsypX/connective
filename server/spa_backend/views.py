from django.shortcuts import render


def spa_index(request):
    return render(request, "spa_backend/spa_index.html")
