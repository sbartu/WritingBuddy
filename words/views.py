from django.views import generic


class IndexView(generic.ListView):
    template_name = 'words/index.html'
    
    def get_queryset(self):
        return
