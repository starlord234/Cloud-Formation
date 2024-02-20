public with sharing class contactsList {
    @auraenabled(cacheable=true)
    public static List<Contact> getContactsList() {
        List<Contact> contList = new List<Contact>();
        return contList;
    }

    }
