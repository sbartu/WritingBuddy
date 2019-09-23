from django.views import generic


class IndexView(generic.TemplateView):
    template_name = 'words/index.html'
    
    def get_queryset(self):
        return

class AboutView(generic.TemplateView):
    template_name = 'words/about.html'
    
    def get_queryset(self):
        return

class ContactView(generic.TemplateView):
    template_name = 'words/contact.html'
    
    def get_queryset(self):
        return
