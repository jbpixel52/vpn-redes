---
title: "Escenario de Firewall"
description: "Verificación de configuración del firewall"
---

# Firewall : UFW

Hicimos uso del firewall Uncomplicated Firewall (UFW) para en los dropplets de Digital Ocean. Los comandos de instalación son los siguientes:

``` bash
apt install ufw 
```

Una vez instalado se tienen que crear reglas con los siguientes comandos

1. Evitar hacernos lockout del host

   ```bash
    ufw allow 22/tcp
   ```

2. Permitir trafico HTTP y HTTPS en los puertos 80 y 443 respectivamente

``` bash
ufw allow 80/tcp
```

``` bash
ufw allow 443/tcp
```

Una vez hecho esto se puede habilitar el firewall y verificar el status del mismo

``` bash
    ufw enable
```

Al dar ``` ufw enable ``` aparece un prompt de advertencia al cual le podremos dar Y para habilitar

``` bash
    ufw status
```

## Llamada de NTP

```
