// Example results for an an article relationships service

module.exports = {
  // Research Advance Usecase
  "http://dx.doi.org/10.7554/eLife.00461": [
    {
      "id": "relationship_1",
      "relationship_type": 'advance',
      "description": 'Building on previous work (Bai et al., 2013), we describe an algorithm that allows cryo-EM structure determination to near-atomic resolution for protein complexes as small as 170 kDa.',
      "creators": [{"name": "Donald Duck", "orcid": "0000-2342-5674-0043"}],
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.00461",
        "title": "Ribosome structures to near-atomic resolution from thirty thousand cryo-EM particles",
        "authors": ["Xiao-chen Bai", "Israel S Fernandez", "Greg McMullan", "Sjors HW Scheres"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/00461/elife00461.xml",
        "published_on": "2013-02-19"
      }
    }
  ],

  // Insight Usecase
  "http://dx.doi.org/10.7554/eLife.03665": [
    {
      "id": "relationship_2",
      "relationship_type": 'insight',
      "description": 'Advances in detector hardware and image-processing software have led to a revolution in the use of electron cryo-microscopy to determine complex molecular structures at high resolution.',
      "creators": [{"name": "Werner Kühlbrandt", "orcid": "0000-2342-5674-0099"}],
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.03678",
        "title": "Microscopy: Cryo-EM enters a new era",
        "authors": ["Werner Kühlbrandt"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/03678/elife03678.xml",
        "published_on": "2014-08-13"
      }
    }
  ],

  // Co-published Usecase
  "http://dx.doi.org/10.7554/eLife.02763": [
    {
      "id": "relationship_3",
      "relationship_type": 'co-published',
      "description": 'This article has been co-published.',
      "creators": [{"name": "Daisy Duck", "orcid": "0000-2342-5674-0055"}],
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.01739",
        "title": "FRET-based reporters for the direct visualization of abscisic acid concentration changes and distribution in Arabidopsis",
        "authors": ["Rainer Waadt", "Kenichi Hitomi", "Noriyuki Nishimura", "Chiharu Hitomi", "Stephen R Adams", "Elizabeth D Getzoff", "Julian I Schroeder"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/01739/elife01739.xml",
        "published_on": "2014-04-15"
      }
    },
    {
      "id": "relationship_4",
      "relationship_type": 'co-published',
      "description": 'This article has been co-published.',
      "creators": [{"name": "Daisy Duck", "orcid": "0000-2342-5674-0055"}],
      "created_at": "2014-10-21T11:04:11.547Z",
      "meta": {

      },
      "related_article": {
        "doi": "http://dx.doi.org/10.7554/eLife.01741",
        "title": "Abscisic acid dynamics in roots detected with genetically encoded FRET sensors",
        "authors": ["Alexander M Jones", "Jonas ÅH Danielson", "Shruti N ManojKumar", "Viviane Lanquar", "Guido Grossmann", "Wolf B Frommer"],
        "url": "/doc.html?url=https://s3.amazonaws.com/elife-cdn/elife-articles/01741/elife01741.xml",
        "published_on": "2014-04-15"
      }
    }
  ]
};

