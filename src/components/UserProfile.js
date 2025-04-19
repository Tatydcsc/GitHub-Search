const UserProfile = ({ user }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={user.avatar_url} alt={user.name} />
      <ProfileInfo>
        <ProfileName>{user.name}</ProfileName>
        <ProfileUsername>@{user.login}</ProfileUsername>
        <ProfileBio>{user.bio}</ProfileBio>
        <ProfileStats>
          <StatItem>
            <StatNumber>{user.followers}</StatNumber>
            <StatLabel>Seguidores</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{user.following}</StatNumber>
            <StatLabel>Seguindo</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{user.public_repos}</StatNumber>
            <StatLabel>Repositórios</StatLabel>
          </StatItem>
        </ProfileStats>
      </ProfileInfo>
    </ProfileContainer>
  );
}; 