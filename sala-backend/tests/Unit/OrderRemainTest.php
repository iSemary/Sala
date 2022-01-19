<?php

namespace Tests\Unit;

use App\OrderHelper;
use PHPUnit\Framework\TestCase;

class OrderRemainTest extends TestCase {
    /** @test */

    function it_can_get_order_remain() {
        $remain = OrderHelper::OrderRemain(50,100);

        $this->assertLessThanOrEqual(50,$remain);
    }
}
