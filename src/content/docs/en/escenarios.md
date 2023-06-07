---
title: "Documentacion de escenarios"
description: "Reporte de como se llevo a cabo la generacion de los escenarios VPN"
---

## Generacion de escenarios

### Instalación del servicio Debian

Lo primero que hicimos aqui fue generar la maquina virtual de Debian, lo cual hicimos siguiendo las especificaciones dadas, en este caso usamos como base la versión preinstalada en C:\R-2022, pusimos la tarjeta de red en modo bridged y usamos un adaptador LAN con Tarjeta Intel PRO/1000 T Server. Le dimos ademas a la maquina virtual 8GB en disco dinamico, asi como 768 MB de memoria. Finalmente modificamos la MAC address para evitar duplicaciones y quedo todo listo para seguir.

- Nginx

Lo primero que hay que hacer es instalar Nginx, lo cual  se puede hacer usando el sistema de paquetes **apt** con los siguientes comandos:

``` bash
sudo apt update
sudo apt install nginx
```

- bind9

Posteriormente pasamos a instalar bind9, para esto no necesitamos hacer update a apt porque lo acababamos de hacer, asi que solo ejecutamos el siguiente comando

``` bash
sudo apt-get install bind9
```

- Dar de alta cuentas

Lo siguiente fue dar de alta las 3 cuentas indicadas por las instrucciones, lo cual hicimos asi:

Primero ejecutamos los siguientes comandos, que sirve para crear usuarios y nos pedira otros parametros como contraseña:

``` bash
sudo adduser usr1
```

``` bash
sudo adduser usr2
```

``` bash
sudo adduser usr3
```

en las 3 cuentas meramente le pusimos contraseña, la cual pusimos como admred$, terminando asi esta sección

### Reglas de firewall establecidas

- TCP

Hicimos uso del firewall Uncomplicated Firewall (UFW) para en los dropplets de Digital Ocean. Los comandos de instalación son los siguientes:

``` bash
apt install ufw 
```

Una vez instalado se tienen que crear reglas con los siguientes comandos

Evitar hacernos lockout del host

```bash
ufw allow 22/tcp
```

Permitir trafico HTTP y HTTPS en los puertos 80 y 443 respectivamente

``` bash
ufw allow 80/tcp
```

``` bash
ufw allow 443/tcp
```

- UDP

Permitir trafico DNS y NTP en los puertos 53 y 123 respectivamente

``` bash
ufw allow 53/udp
```

``` bash
ufw allow 123/udp
```

Una vez hecho esto se puede habilitar el firewall y verificar el status del mismo

``` bash
    ufw enable
```

Al dar `ufw enable` aparece un prompt de advertencia al cual le podremos dar Y para habilitar

``` bash
    ufw status
```

