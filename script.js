$(".visitorPanel").after('<div class="section"><div class="secondaryContent"><h3>RGNotes</h3><div class="pairsJustified"><textarea class="textCtrl blocnote" id="note" placeholder="Entrez votre texte ici" style="margin: 0px; width: 218px; height: 60px;"></textarea><center><button class="button primary" id="buttonNote">Sauvegarder</button></center></div></i></a></span></div></div>')

if (typeof localStorage != 'undefined')
{
    if ('blocNoteTexte' in localStorage)
    {
       document.getElementById('note').value = localStorage.getItem('blocNoteTexte');
    }
}

$('#buttonNote').click(function() { 
    localStorage.setItem('blocNoteTexte', $('#note').val()); 
});
