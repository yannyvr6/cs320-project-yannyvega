package org.acme;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Request")
public class RequestData {
    @Id
    @GeneratedValue
    public Long id;

    public String name;
    public String email;
    public String title;
    public String author;
}

