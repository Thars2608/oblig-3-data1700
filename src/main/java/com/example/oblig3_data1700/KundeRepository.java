package com.example.oblig3_data1700;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class KundeRepository {

    @Autowired
    private JdbcTemplate db;
    public void lagreAlleKunder(Kunde innkunde) {
        String sql = "INSERT INTO Kunde(film, antall, fornavn, etternavn, tlf, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innkunde.getFilm(), innkunde.getAntall(), innkunde.getFornavn(), innkunde.getEtternavn(), innkunde.getTlf(), innkunde.getEpost());
    }

    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde ORDER BY etternavn";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;
    }

    public void slettAlleKunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
}
