---
sidebar_position: 6
title: Progrès
description: Comment sont structurées les progrès dans Minecraft ?
tags: [bases, ressources]
---

## Structure générale

```json
{
  "parent": "minecraft:story/smelt_iron",
  "display": {
    "icon": {
      //Icone du progrès
    },
    "title": {
      //Titre du progrès
    },
    "description": {
      //Description du progrès
    },
    "announce_to_chat": true,
    "frame": "task", //Type d'affichage du progrès
    "hidden": false,
    "show_toast": true
  },
  "criteria": {
    //Critères
  },
  "requirements": [
    [
      //Critères requis pour valider le progrès
    ]
  ],
  "rewards": {
    //Récompense(s)
  }
}
```