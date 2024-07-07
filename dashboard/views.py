from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def search_view(request):
    query = request.GET.get('q', '')
    data_source = {
        'Home': '/',
        'Browser Exploitation': '/browser-exploitation',
        'Web Security': '/web-security',
        'System Security': '/system-security',
        'Mobile Security': '/mobile-security',
        'Forensics': '/forensics',
        'Social Engineering': '/social-engineering',
        'Checklist': '/checklist',
        'Settings': '/settings',
    }
    if query:
        results = [{'name': item, 'url': url} for item,
                   url in data_source.items() if query.lower() in item.lower()]
    else:
        results = [{'name': item, 'url': url}
                   for item, url in data_source.items()]

    return JsonResponse({'results': results})


def index(request):
    return render(request, 'home.html')


def browser_exploitation(request):
    return render(request, 'browser-exploitation.html')


def web_security(request):
    return render(request, 'web-security.html')


def system_security(request):
    return render(request, 'system-security.html')


def mobile_security(request):
    return render(request, 'mobile-security.html')


def forensics(request):
    return render(request, 'forensics.html')


def social_engineering(request):
    return render(request, 'social-engineering.html')


def checklist(request):
    tabs = [
        {'id': 'home', 'title': 'Local Windows Privilege Escalation',
            'content': 'Content for Local Windows Privilege Escalation'},
        {'id': 'menu1', 'title': 'Android APK',
         'content': 'Content for Android APK'},
        {'id': 'menu2', 'title': 'IOS Pentesting',
         'content': 'Content for IOS Pentesting'},
        {'id': 'menu3', 'title': 'Linux Privilege Escalation',
         'content': 'Content for Linux Privilege Escalation'}
    ]
    return render(request, 'checklist.html', {'tabs': tabs})


def settings(request):
    return render(request, 'settings.html')
