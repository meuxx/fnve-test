import * as postService from './postService'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('postService', () => {
  it('formats posts received from the API', async () => {
    const apiPost = {
      albumId: 1,
      id: 1,
      title: 'test',
      url: 'test url',
      thumbnailUrl: 'test thumbnail',
    }

    const post = {
      id: 1,
      pictureUrl: 'test url',
      thumbnailUrl: 'test thumbnail',
      title: 'test',
    }

    const data = {
      data: [apiPost],
    }

    mockedAxios.get.mockImplementationOnce(async () => data)

    const response = await postService.getPosts()
    expect(response).toEqual([post])
  })
})
