from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
def search_view(request):
  query = request.GET.get('q', '')
  data_source = {
    'Home': '/',
    'Settings': '/settings',
    'Profile': '/profile',
    'Logout': '/logout',
    'Dashboard': '/dashboard',
    'Reports': '/reports',
  }
  if query:
    results = [{'name': item, 'url': url} for item, url in data_source.items() if query.lower() in item.lower()]
  else:
    results = [{'name': item, 'url': url} for item, url in data_source.items()]

  return JsonResponse({'results': results})

# Create your views here.
def index(request):
  return render(request, 'index.html')