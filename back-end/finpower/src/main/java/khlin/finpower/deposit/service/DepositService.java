package khlin.finpower.deposit.service;

import khlin.finpower.deposit.repository.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepositService {
    @Autowired
    DepositRepository depositRepository;


}
