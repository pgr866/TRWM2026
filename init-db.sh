#!/bin/sh
RESPONSE=$(curl -s -X POST http://localhost:3000/api/locations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Starcups",
    "address": "125 High Street, Reading, RG6 1PS",
    "rating": 3,
    "facilities": ["Hot drinks", "Food", "Premium wifi"],
    "coords": [-0.9690884, 51.455041]
  }')

LOCATION_ID=$(echo $RESPONSE | grep -o '"_id":"[^"]*' | sed 's/"_id":"//')

curl -X POST http://localhost:3000/api/locations/$LOCATION_ID/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "author": "Simon Holmes",
    "rating": 5,
    "reviewText": "What a great place. I can really recommend it."
  }'
