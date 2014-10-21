module.exports = [
  // source is key-reference of target (experiment)
  {
    id: "key_reference_348989",
    source: "http://dx.doi.org/10.1016/j.immuni.2011.09.013",
    target: "http://dx.doi.org/10.7554/eLife.00778",
    type: 'key_reference',
    key_reference_type: "experiment",
    description: 'A ground breaking experiment can be found here.',
    creators: [],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is key-reference of target (experiment)
  {
    id: "key_reference_348989",
    source: "http://dx.doi.org/10.1016/j.immuni.2011.09.013",
    target: "http://dx.doi.org/10.1371/journal.pbio.0030356",
    type: 'key_reference',
    key_reference_type: "key-data",
    description: 'Key data can be found here.',
    creators: [],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is advance of target
  {
    source: "http://dx.doi.org/10.7554/eLife.03665",
    target: "http://dx.doi.org/10.7554/eLife.00461",
    type: 'advance',
    description: 'Building on previous work (Bai et al., 2013), we describe an algorithm that allows cryo-EM structure determination to near-atomic resolution for protein complexes as small as 170 kDa.',
    creators: [{name: "Donald Duck", orcid: "0000-2342-5674-0043"}],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is insight of target
  {
    source: "http://dx.doi.org/10.7554/eLife.03678",
    target: "http://dx.doi.org/10.7554/eLife.03665",
    type: 'insight',
    description: 'Advances in detector hardware and image-processing software have led to a revolution in the use of electron cryo-microscopy to determine complex molecular structures at high resolution.',
    creators: [{name: "Werner Kühlbrandt", orcid: "0000-2342-5674-0099"}],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is co-publication of target and vice versa (#1)
  {
    source: "http://dx.doi.org/10.7554/eLife.01739", 
    target: "http://dx.doi.org/10.7554/eLife.02763",
    type: 'co_publication',
    description: 'This article has been co-published.',
    creators: [{name: "Daisy Duck", orcid: "0000-2342-5674-0055"}],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is co-publication of target and vice versa (#2)
  {
    source: "http://dx.doi.org/10.7554/eLife.01739", 
    target: "http://dx.doi.org/10.7554/eLife.01741",
    type: 'co_publication',
    description: 'This article has been co-published.',
    creators: [{name: "Daisy Duck", orcid: "0000-2342-5674-0055"}],
    created_at: "2014-10-21T11:04:11.547Z"
  },
  // source is co-publication of target and vice versa (#3)
  {
    source: "http://dx.doi.org/10.7554/eLife.01741", 
    target: "http://dx.doi.org/10.7554/eLife.02763",
    type: 'co_publication',
    description: 'This article has been co-published.',
    creators: [{name: "Daisy Duck", orcid: "0000-2342-5674-0055"}],
    created_at: "2014-10-21T11:04:11.547Z"
  }
];