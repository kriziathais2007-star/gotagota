package com.senati.gotagotA.entity;

import jakarta.persistence.*;
// @entity le dice a hibernate que esta clase representa una tabla en la BD@Entity`
// @table indica el nombre exacto de tabla en mysql o mariadb@Table(name = "cliente")`
public class Cliente {
    // @id marca este campo como la clave primaria de la tabla`
    // @generatevalue hace que el id se genere automaticamente (Autoincrement)`
    // @Column indica el nombre exacto de la columna MYSQL`
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cliente_id")
    private long id;
    //nullable=false significa que este campo no puede estar vocio en la db`
    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido

    //unique=true significa que no puede haber ods clientes con el mismo dni`
    // length=8 significa que limita el campo a 8 caracteres`

    @Column(nullable = false, unique = true, length = 8)
    private String dni;

    // sin anotaciones (@) extra: columna normal, puede ser nula`

    private String telefono;
    private String direccion;

    // GETTER O SETTER`

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getDni() {
        return dni;
    }
    public void setDni(String dni) {
        this.dni = dni;
    }
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
