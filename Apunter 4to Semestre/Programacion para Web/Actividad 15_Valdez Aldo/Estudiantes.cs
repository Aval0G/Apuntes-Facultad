using System;

public class Estudiante
{
    public string Nombre { get; set; } = "";
    public string Correo { get; set; } = "";
    public int Calificacion { get; set; }

    public Estudiante(string nombre, string correo, int calificacion)
    {
        Nombre = nombre;
        Correo = correo;
        Calificacion = calificacion;
    }

    public bool EsNombreValido()
    {
        return !string.IsNullOrWhiteSpace(Nombre);
    }

    public bool EsCorreoValido()
    {
        try
        {
            var addr = new System.Net.Mail.MailAddress(Correo);
            return addr.Address == Correo;
        }
        catch
        {
            return false;
        }
    }

    public bool EsCalificacionValida()
    {
        return Calificacion >= 0 && Calificacion <= 10;
    }

    public void ActualizarInformacion(string nombre, string correo, int calificacion)
    {
        if (EsNombreValido())
        {
            Nombre = nombre;
        }

        if (EsCorreoValido())
        {
            Correo = correo;
        }

        if (EsCalificacionValida())
        {
            Calificacion = calificacion;
        }
    }
}
