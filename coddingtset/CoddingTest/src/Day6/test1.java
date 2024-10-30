package Day6;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class test1 {

    class Song{
        int index;
        int playCount;

        public Song(int playCount, int index) {
            this.playCount = playCount;
            this.index = index;
        }
    }

    public int[] solution(String[] genres, int[] plays) {
        //장르별 총 재생 수를 저장
        HashMap<String, Integer> CountMap = new HashMap<>();

        //장르별 곡 리스트 저장
        HashMap<String, List<Song>> SongMap = new HashMap<>();


        //데이터를 맵에 저장
        for(int i = 0; i < genres.length; i++){
            String genre = genres[i];
            int play = plays[i];

            //장르별 재생 수 저장
            CountMap.put(genre, CountMap.getOrDefault(genre, 0) + play);

            //
            SongMap.putIfAbsent(genre, new ArrayList<>());
            SongMap.get(genre).add(new Song(i, play));
        }

        for(String genre : SongMap.keySet()){
            List<Song> songs = SongMap.get(genre);
            songs.sort((a,b) -> {
                if(b.playCount == a.playCount){
                    return a.index - b.index;
                }
                return b.playCount - a.playCount;
            });
        }

        List<String> sortedGenres = new ArrayList<>(CountMap.keySet());
        sortedGenres.sort((a, b) -> CountMap.get(b) - CountMap.get(a));

        List<Integer> bestAlbum = new ArrayList<>();
        for (String genre : sortedGenres) {
            List<Song> songs = SongMap.get(genre);
            bestAlbum.add(songs.get(0).index);
            if (songs.size() > 1) {
                bestAlbum.add(songs.get(1).index);
            }
        }

        return bestAlbum.stream().mapToInt(i -> i).toArray();
    }
}
