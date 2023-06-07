---
title: "Comprobaciones"
description: "Distintas comprobaciones de funcionamiento del servidor"
---

### Comprobaciones

- Verificar que todo usuario conectado LAN1 pueda acceder a la red remota LAN2 y viceversa. Verificar operación de los servicios desde máquinas virtuales definidas en LAN1 a LAN2 y viceversa.

Como se puede ver en las imagenes, es posible interactuar con equipos del lado izquierdo usando equipos del lado derecho y viceversa

![Ping](/ping.png)

![Ping](/ping-2.png)

- Funciona en Android, IOS, Mac, PC Windows y PC Linux.

Como se ve en las siguientes imagenes, es posible acceder desde varios sistemas operativos distintos, concretamente Android.

![Android](/android.jpg)

- Regla de Firewall en LAN1/LAN2 para servicio SNMP en pfsense y OPNsense.

Tras correr el script tal y como lo mando el equipo correspondiente, en ambos lados hay que instalar el SNMP y una que otra cosa, como se ve en la imagen, donde lo encerrado en rojo se uso para ambos lados, mientras que lo del circulo azul se pone en el lado izquierdo solamente.

![Reglas1](/reglas1.png)

Para instalar lo del circulo rojo, que va en ambos lados, hay que hacer lo que se ve en las imagenes de abajo

![Reglas2](/reglas2.png)

![Reglas3](/reglas3.png)

Por ultimo, para instalar lo del circulo azul, que va solamente en el lado izquierdo, se hace lo de la imagen de abajo.

![Reglas4](/reglas4.png)
