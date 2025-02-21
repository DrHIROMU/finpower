package khlin.finpower.user.repository;

import khlin.finpower.user.entity.User;
import khlin.finpower.user.enums.AccountStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = " select * from user" +
            "        where first_name = :firstName " +
            "        and last_name = :lastName " +
            "        and email = :email " +
            "        and account_status = :accountStatus "
            , nativeQuery = true)
    List<User> findUsersByConditions(String firstName, String lastName, String email, AccountStatus accountStatus);

    Optional<User> findByEmailAndPassword(String email, String password);
}
