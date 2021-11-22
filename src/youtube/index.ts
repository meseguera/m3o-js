import * as m3o from "@m3o/m3o-node";

export class YoutubeService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for videos on YouTube
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "youtube",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface SearchRequest {
  // Query to search for
  query?: string;
}

export interface SearchResponse {
  // List of results for the query
  results?: SearchResult[];
}

export interface SearchResult {
  // if live broadcast then indicates activity.
  // none, upcoming, live, completed
  broadcasting?: string;
  // the channel id
  channel_id?: string;
  // the channel title
  channel_title?: string;
  // the result description
  description?: string;
  // id of the result
  id?: string;
  // kind of result; "video", "channel", "playlist"
  kind?: string;
  // published at time
  published_at?: string;
  // title of the result
  title?: string;
  // the associated url
  url?: string;
}
