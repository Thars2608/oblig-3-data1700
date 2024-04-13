package com.example.oblig3_data1700;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class KundeController {
    @Autowired
    private KundeRepository rep;

     @PostMapping("/lagreAlle")
    public void lagreAlle(Kunde innKunde) {rep.lagreAlleKunder(innKunde);
     }

     @GetMapping("/hentAlle")
    public List<Kunde> hentAlle() { return rep.hentAlleKunder();}

    @GetMapping("/slettAlle")
    public void slettAlle() { rep.slettAlleKunder();}
}
