package khlin.finpower.user.repository;

import khlin.finpower.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = " select * from user" +
            "        where coalesce(:firstName, first_name) = first_name" +
            "        and coalesce(:lastName, last_name) = last_name" +
            "        and coalesce(:email, email) = email " +
            "        and coalesce(:accountStatus, account_status) = account_status "
            , nativeQuery = true)
    List<User> findUsersByConditions(String firstName, String lastName, String email, String accountStatus);

    Optional<User> findByEmailAndPassword(String email, String password);
}
