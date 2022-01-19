<?php


namespace App;


class OrderHelper
{
    function OrderRemain($Price, $Tendered) {

        return $Tendered - $Price;
    }
}
