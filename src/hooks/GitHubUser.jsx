import useGitHubUser from "./useGitHubUser"

const GitHubUser = ({username}) => {
    const {data , error} = useGitHubUser(username)

        return (
            <div>
              {error && <div>Error: {error.message}</div>}
              {data && (
                <div>
                  <div>Username: {data.login}</div>
                  <div>Name: {data.name}</div>
                  <div>
                    <img src={data.avatar_url} alt={`${data.login}'s avatar`} />
                  </div>
                </div>
              )}
            </div>
          );

}

export default GitHubUser