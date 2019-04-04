import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Service Listo");
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDvUfLiGo_lWcTS1A2scBmyFzDBCqVHp_yAp2aWbaVNrP78hBtLKSyD7Vqz_LO1XbnZkYR8MEriRAOvqQY'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDvUfLiGo_lWcTS1A2scBmyFzDBCqVHp_yAp2aWbaVNrP78hBtLKSyD7Vqz_LO1XbnZkYR8MEriRAOvqQY'
    })

    return this.http.get(`https://api.spotify.com/v1/search/?q=${termino}&type=artist&limit=15`, { headers });
  }
}
