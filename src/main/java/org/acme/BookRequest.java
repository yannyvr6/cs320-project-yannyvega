package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity
public class BookRequest extends PanacheEntity {
    public String title;
    public String author;
    public String email;
    public String name;

    public String getEmail(){ return email; }
    public void setEmail(String email){ this.email = email; }

    public String getName(){ return name; }
    public void setName(String name){ this.name = name; }

    public String getTitle(){ return title;}
    public void setTitle(String title) { this.title = title;}

    public String getAuthor(){ return author; }
    public void setAuthor(String author) { this.author = author; }

}
