package khlin.finpower.deposit.controller;

import khlin.finpower.deposit.service.DepositService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepositController {
    @Autowired
    DepositService depositService;


}
